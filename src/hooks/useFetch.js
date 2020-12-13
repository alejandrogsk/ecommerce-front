import { useState, useEffect, useRef } from 'react';

export const useFetch = ( url ) => {
    
    const isMounted = useRef(true);
    const [state, setState] = useState({data: null, loading: true, error: null});
    

    useEffect(() => {
        return () => {
            isMounted.current = false;
        }
    }, [])


    useEffect(() => {

        setState({ data: null, loading: true, error: null });
        //esto se hace para que cuando apriete el boto aparezca denuevo 'loading...'

        fetch(url)
        
            .then( resp => resp.json() )
            .then( data => { 
                if( isMounted.current ) {
                    setState({
                        loading: false,
                        error: null,
                        data
                    });
                }
            })
            .catch( () => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info'
                })
            })

    }, [ url ])

    return state;
}