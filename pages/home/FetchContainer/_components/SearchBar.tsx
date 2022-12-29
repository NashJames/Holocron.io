import styles from '../FetchSection.module.scss'
import { useCallback, useEffect, useRef, useState } from 'react'
import { Search, Close } from '@mui/icons-material'
import { Button, IconButton, InputAdornment, TextField, Tooltip, Typography } from '@mui/material'
import { IBM_Plex_Mono } from '@next/font/google'

const IBMPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: '400',
  variable: '--ibm_plex_mono-font',
})

const URL_REGEX = /^https:\/\/swapi.dev\/api\/\b([-a-zA-Z0-9()!@:%_+.~#?&/=]*)$/

type SearchBarProps = { searchRequest: (_request: string) => void }
export default function SearchBar({ searchRequest }: SearchBarProps) {
  const searchBarRef = useRef<HTMLInputElement>(null)
  const [searchInput, setSearchInput] = useState<string>('')
  const [requestError, setRequestError] = useState<boolean>(false)

  // Sets error if the user requests an invalid SWAPI URL
  const validateSearchInput = useCallback(() => {
    const searchInputTrim = searchInput.trim()
    URL_REGEX.test(searchInputTrim) ? searchRequest(searchInputTrim) : setRequestError(true)
  }, [searchInput, searchRequest])

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
    <TextField
      fullWidth
      id="SearchBar"
      variant="standard"
      value={searchInput}
      error={requestError}
      inputRef={searchBarRef}
      helperText={
        requestError ? (
          <Typography className={IBMPlexMono.className}>
            Requests must be a valid URL beginning with:{' '}
            <code style={{ color: 'azure' }}>https://swapi.dev/api/</code>
          </Typography>
        ) : (
          <></>
        )
      }
      onChange={({ target }) => {
        setSearchInput(target.value)
        if (requestError && target.value.startsWith('https://swapi.dev/api/')) {
          setRequestError(false)
        }
      }}
      InputProps={{
        className: IBMPlexMono.className,
        placeholder: 'Search...',
        type: 'search',
        startAdornment: (
          <InputAdornment position="start">
            <Search />
          </InputAdornment>
        ),
        endAdornment: (
          <SearchEndAdornment
            submitSearch={() => validateSearchInput()}
            resetSearch={() => setSearchInput('')}
            searchInUse={searchInput !== ''}
          />
        ),
      }}
    />
  )
}

type SearchEndAdornmentProps = {
  submitSearch: () => void
  resetSearch: () => void
  searchInUse: boolean
}

/// Mini component to group the Search Bar actions
const SearchEndAdornment = ({
  submitSearch,
  resetSearch,
  searchInUse,
}: SearchEndAdornmentProps) => {
  return (
    <span className={styles.SearchButtons}>
      <Tooltip arrow title="Click here or press the 'Enter' key">
        <Button variant="square" size="small" type="submit" onClick={submitSearch}>
          REQUEST
        </Button>
      </Tooltip>
      {searchInUse ? (
        <Tooltip arrow title="Click here to clear the search bar">
          <IconButton className={styles.IconButton} size="small" type="reset" onClick={resetSearch}>
            <Close />
          </IconButton>
        </Tooltip>
      ) : (
        <Tooltip arrow title="Press the '/' key to begin searching">
          <IconButton className={styles.IconButton} size="small">
            <kbd aria-hidden>/</kbd>
          </IconButton>
        </Tooltip>
      )}
    </span>
  )
}
