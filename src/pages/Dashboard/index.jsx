import React, { useEffect, useState, useRef, useCallback } from 'react';
import { FiSearch } from 'react-icons/fi';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Tag from '../../components/Tag';
import CreateNoteButton from '../../components/CreateNoteButton';
import NotePreview from '../../components/NotePreview';
import Loading from '../../components/Loading';
import {
  Container,
  SearchBar,
  ContentContainer,
  TagsContainer,
  NotesContainer,
  NullContainer,
} from './styles';
import api from '../../services/api';

const Dashboard = () => {
  const [loading, setLoading] = useState(false);
  const [tags, setTags] = useState(null);
  const [notes, setNotes] = useState(null);
  const [apiNotesData, setApiNotesData] = useState(null);
  const [apiTagsData, setApiTagsData] = useState(null);
  const [search, setSearch] = useState([]);
  const [searchBarValue, setSearchBarValue] = useState('');
  const [searchBarTimeout, setSearchBarTimeout] = useState(null);
  const [tagSearchTimeout, setTagSearchTimeout] = useState(null);
  const searchBarRef = useRef(null);

  useEffect(() => {
    /*    const getData = async () => { */
    setLoading(prev => {
      if (!prev) {
        return true;
      }

      return prev;
    });

    /* --------------------Tags----------------------------- */
    api.get('/tags').then(response => {
      setApiTagsData(response.data.tags);
      setTags(response.data.tags);
    });

    /* --------------------Notes----------------------------- */
    api.get('/notes').then(response => {
      setApiNotesData(response.data.notes);
      setLoading(prev => {
        if (prev) {
          return false;
        }

        return prev;
      });
    });

    /*    }; */
  }, []);

  useEffect(() => {
    clearTimeout(tagSearchTimeout);
    setLoading(prev => {
      if (!prev) {
        return true;
      }

      return prev;
    });

    const timeout = setTimeout(() => {
      if (apiNotesData && apiNotesData !== null) {
        setLoading(prev => {
          if (prev) {
            return false;
          }

          return prev;
        });
      }

      /*

      */
      setNotes(() => {
        if (apiNotesData && apiNotesData.length && search && search.length) {
          const filteredNotes = apiNotesData.filter(note => {
            if (search.length > 1 && note.tags.length >= search.length) {
              const noteTagsInSearchArray = note.tags.map(tag => {
                if (search.includes(tag.name)) return true;
                return false;
              });

              const noteIncludesAllTags = noteTagsInSearchArray.reduce(
                (prev, isInSearch) => {
                  if (isInSearch) {
                    prev.push(true);
                  }

                  return prev;
                },
                [],
              );

              return noteIncludesAllTags.length === search.length;
            }

            if (search.length === 1 && note.tags.length) {
              const noteHasSearchedTag = note.tags.reduce(
                (noteHasTagPrev, tag) => {
                  if (search.includes(tag.name)) {
                    return true;
                  }

                  if (noteHasTagPrev) {
                    return noteHasTagPrev;
                  }

                  return false;
                },
                false,
              );

              return noteHasSearchedTag;
            }

            return false;
          });

          if (filteredNotes) return filteredNotes;

          return [];
        }

        return apiNotesData;
      });

      /*

      */
    }, 400);
    setTagSearchTimeout(timeout);
  }, [search, apiNotesData]);

  useEffect(() => {
    clearTimeout(searchBarTimeout);
    setLoading(prev => {
      if (!prev) {
        return true;
      }

      return prev;
    });

    const timeout = setTimeout(() => {
      if (apiNotesData && apiNotesData !== null) {
        setLoading(prev => {
          if (prev) {
            return false;
          }

          return prev;
        });
      }

      setNotes(prevNotes => {
        if (prevNotes && searchBarValue) {
          const filteredNotes = prevNotes.filter(note => {
            const titleIncludesAllWords = searchBarValue
              .split(' ')
              .reduce((includesWordsPrev, word) => {
                if (
                  includesWordsPrev &&
                  note.title.toUpperCase().includes(word.toUpperCase())
                ) {
                  return true;
                }

                return false;
              }, true);

            return titleIncludesAllWords;
          });

          return filteredNotes;
        }

        /*


      */

        /* Had to made that "force update" because
      the note's filter is made with the notes
      array already filtered by the tag's filter.
      Also, the note's filter by the search bar is
      made on every change on the search bar's value
      and when you delete your search it returns
      an note's array already filtered by the search bar
      in the past and not all the notes filtered only by tag's filter.
    */

        setSearch(searchPrev => {
          if (searchPrev) {
            const forceUpdate = [...searchPrev];
            return forceUpdate;
          }
          return [];
        });
        /*


        */

        return prevNotes;
      });
    }, 500);
    setSearchBarTimeout(timeout);
  }, [searchBarValue]);

  const handleSearchBarChange = useCallback(e => {
    setSearchBarValue(e.target.value);
  }, []);

  return (
    <>
      <Container
        hasContent={
          (notes && !!notes.length) || (apiTagsData && apiTagsData.length)
        }
      >
        <Header title="Minhas notas" />
        <ContentContainer
          hasContent={notes && !!notes.length}
          styleHeight={document.documentElement.scrollHeight}
        >
          <SearchBar>
            <input
              type="text"
              placeholder="Pesquisar"
              ref={searchBarRef}
              value={searchBarValue}
              onChange={handleSearchBarChange}
            />
            <FiSearch size={20} />
          </SearchBar>

          <TagsContainer>
            {tags &&
              !!tags.length &&
              tags.map(tag => (
                <Tag
                  key={tag.id}
                  name={tag.name}
                  color={tag.color}
                  setTagsArray={setSearch}
                  tagsArray={search}
                />
              ))}
          </TagsContainer>

          <NotesContainer
            isFullFilled={notes && !!notes.length}
            isLoading={loading}
          >
            {notes &&
              !loading &&
              !!notes.length &&
              notes.map(note => {
                return (
                  <NotePreview
                    key={note.id}
                    data={note}
                    setGeneralData={setApiNotesData}
                  />
                );
              })}

            {loading && <Loading />}

            {(!notes || !notes.length) && !loading && (
              <NullContainer>
                <h1>Nenhum conteúdo para mostrar</h1>
                <p>
                  Clique no botão rosa para adicionar novas notas ao seu perfil
                </p>
              </NullContainer>
            )}
          </NotesContainer>

          <CreateNoteButton />
        </ContentContainer>
        <Footer />
      </Container>
    </>
  );
};

export default Dashboard;
