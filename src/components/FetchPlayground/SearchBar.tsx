'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Code, Input } from '@nextui-org/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { SearchButtons } from './_components/SearchButtons'

import { tw } from '@lib/tailwind-merge'

const css = {
  input: 'mt-12 font-mono text-xs md:text-sm [&_input]:text-white',
  searchIcon: 'w-6',
  errorText: 'text-xs md:text-sm',
}

const URL_REGEX = /^https:\/\/swapi.dev\/api\/\b([\w!#%&()+./:=?@~-]*)$/

type SearchBarProps = { searchRequest: (_request: string) => void }

/** Basic Search Bar with keyboard listening, input validation and styling */
export default function SearchBar({ searchRequest }: SearchBarProps) {
  const searchBarRef = useRef<HTMLInputElement>(null)
  const [searchInput, setSearchInput] = useState<string>('')
  const [validationError, setValidationError] = useState<boolean>(false)

  /** Checks for a valid request URL before sending to the fetch */
  const validateSearchInput = useCallback(() => {
    const trimmedInput = searchInput.trim()
    URL_REGEX.test(trimmedInput) ? searchRequest(trimmedInput) : setValidationError(true)
  }, [searchInput, searchRequest])

  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (document.activeElement?.id === searchBarRef.current?.id) {
        if (event.key === 'Enter') {
          validateSearchInput()
          event.preventDefault()
        }
      } else {
        if (event.key === '/') {
          searchBarRef.current?.focus()
          event.preventDefault()
        }
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [searchInput, validateSearchInput])

  return (
    <Input
      variant="underlined"
      placeholder="Search..."
      className={css.input}
      // Error handling
      validationState={validationError ? 'invalid' : 'valid'}
      errorMessage={
        validationError ? (
          <h6 className={css.errorText}>
            Requests must be a valid URL beginning with:{' '}
            <Code className={tw(css.errorText, 'text-white')}>https://swapi.dev/api/</Code>
          </h6>
        ) : undefined
      }
      // Input handling
      ref={searchBarRef}
      value={searchInput}
      onChange={({ target }) => {
        setSearchInput(target.value)
        if (validationError && target.value.startsWith('https://swapi.dev/api/')) {
          setValidationError(false)
        }
      }}
      // Button Actions
      startContent={<MagnifyingGlassIcon className={css.searchIcon} />}
      endContent={
        <SearchButtons
          submitSearch={validateSearchInput}
          resetSearch={() => setSearchInput('')}
          textFieldEmpty={searchInput === ''}
        />
      }
    />
  )
}
