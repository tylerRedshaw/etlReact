import { useContext } from "react";
import GlobalContext from "./GlobalContext";
import randomWords from "random-words"

const useGlobalContext = () => {
    const { state, dispatch } = useContext(GlobalContext);

    const updateApiKey = (apiKey) => {
        dispatch({
            type: 'UPDATE_KEY',
            data: apiKey
        })
    }

    const updateComponent = (selectedFlow) => {
        console.log(selectedFlow);
        dispatch({
            type: 'CHANGE_COMPONENT',
            data: selectedFlow
        })
    }

    const fetchCatalog = () => {
      const url = `http://localhost:8080/catalog?key=${state.apiKey}`
      fetch(url)
      .then(response => response.json())
      .then(data => {
        let mockCatalogData = JSON.parse(JSON.stringify(data));
        mockCatalogData.objects[0].item_data.variations[0].item_variation_data.name = randomWords(1)[0] // fake a change

          dispatch({
            type: 'FETCH_CATALOG',
            data: data
          })

          dispatch({
            type: 'MOCK_CATALOG',
            data: mockCatalogData
          })
      });
    }


    return {
        ...state,
        actions: {
            updateApiKey,
            updateComponent,
            fetchCatalog,
        }
    }
}

export default useGlobalContext;