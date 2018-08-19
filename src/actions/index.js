export const selectLibrary = (libraryId) => { // not using default so we can export many things here

    return {
        type: 'select_library',
        payload: libraryId 


    }
}