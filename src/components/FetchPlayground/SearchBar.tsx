'use client'

import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'
import { Code, Textarea } from '@nextui-org/react'
import { useCallback, useEffect, useRef, useState } from 'react'

import { SearchButtons } from './blocks/SearchButtons'

import { tw } from '@lib/tailwind-merge'

const css = {
  root: 'mt-12 flex [&_label]:self-end font-mono',
  searchIcon: 'w-6 mx-1.5 -mt-3',
  textArea: 'text-xs md:text-sm h-18 [&_textarea]:pr-28',
  errorText: 'text-xs md:text-sm text-danger',
}

const URL_REGEX = /^https:\/\/swapi.dev\/api\/\b([-a-zA-Z0-9()!@:%_+.~#?&/=]*)$/

type SearchBarProps = { searchRequest: (_request: string) => void }

/** Basic Search Bar with keyboard listening, input validation and styling */
export default function SearchBar({ searchRequest }: SearchBarProps) {
  const searchBarRef = useRef<HTMLInputElement>(null)
  const [searchInput, setSearchInput] = useState<string>('')
  const [validationError, setValidationError] = useState<boolean>(false)

  // Set error state if the user requests an invalid SWAPI URL
  const validateSearchInput = () => {
    const searchInputTrim = searchInput.trim()
    URL_REGEX.test(searchInputTrim) ? searchRequest(searchInputTrim) : setValidationError(true)
  }

  // Listens to keyboard input
  useEffect(() => {
    const handleKeydown = (event: KeyboardEvent) => {
      if (document.activeElement?.id === searchBarRef.current?.id) {
        // Send the search request on the 'Enter' or 'Return' key
        if (event.key === 'Enter') {
          validateSearchInput()
          event.preventDefault()
        }
      } else {
        // Focus the search bar with the '/' key
        if (event.key === '/') {
          searchBarRef.current?.focus()
          event.preventDefault()
        }
      }
    }
    document.addEventListener('keydown', handleKeydown)
    return () => document.removeEventListener('keydown', handleKeydown)
  }, [validateSearchInput])

  return (
    <div className={css.root}>
      <MagnifyingGlassIcon className={css.searchIcon} />

      <Textarea
        maxRows={1}
        id="SearchBar"
        variant="underlined"
        placeholder="Search..."
        className={css.textArea}
        // Error handling
        validationState={validationError ? 'invalid' : 'valid'}
        errorMessage={
          validationError ? (
            <h6 className={css.errorText}>
              Requests must be a valid URL beginning with:{' '}
              <Code className={tw(css.errorText, 'text-white')}>https://swapi.dev/api/</Code>
            </h6>
          ) : null
        }
        // Input handling
        ref={searchBarRef}
        value={searchInput}
        onChange={({ target }) => {
          if (searchInput.length < 95) setSearchInput(target.value)
          if (validationError && target.value.startsWith('https://swapi.dev/api/')) {
            setValidationError(false)
          }
        }}
        // Button Actions
        labelPlacement="inside"
        label={
          <SearchButtons
            submitSearch={validateSearchInput}
            resetSearch={() => setSearchInput('')}
            textFieldEmpty={searchInput === ''}
          />
        }
      />
    </div>
  )
}
