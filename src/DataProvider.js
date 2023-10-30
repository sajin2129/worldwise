import React, { createContext, useContext, useReducer } from 'react'
const Data = createContext();

const DataProvider = ({ children }) => {
    const reducer = (state, action) => {
        switch (action.type) {
            case "dates":
                return { ...state, dates: action.payload };
            case "cityname":
                return { ...state, cityname: action.payload };
            case "visitnotes":
                return { ...state, visitnotes: action.payload };
            case "cities":
                return { ...state, cities: action.payload };
            case "openadd":
                return { ...state, openadd: action.payload };
            default:
                return { ...state };
        }
    }

    const arr = [
        {
            id: 1,
            country: "PORTUGAL",
            cityname: "Lisbon",
            countryCode: "PT",
            dates: "monday,21/3/2027",
            visitnotes: "My favorite city so far!",
            lat: 1.1,
            lon: 1.1,
        },
        {
            id: 2,
            country: "SPAIN",
            countryCode: "ES",
            cityname: "Madrid",
            dates: "monday,21/3/2027",
            visitnotes: "",
            lat: 1.1,
            lon: 1.1,
        },
        {
            id: 3,
            country: "Paris",
            countryCode: "FR",
            cityname: "Paris",
            dates: "monday,21/3/2027",

            visitnotes: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Adipisci doloremque, dicta ipsa architecto saepe earum fugit ut atque necessitatibus praesentium officia, a at accusantium vitae, expedita.",
            lat: 1.1,
            lon: 1.1,

        }

    ]

    const singleArr = { cityname: "", dates: "", visitnotes: "", cities: [...arr], openadd: false }

    const [state, dispatch] = useReducer(reducer, singleArr)

    const { openadd, cityname, dates, visitnotes, cities } = state;


    // const [cityname, setCityname] = useState("");
    // const [dates, setDates] = useState("");
    // const [visitnotes, setVisitnotes] = useState("")
    // const [cities, setCities] = useState([...arr]);


    // const [openadd, setOpenadd] = useState(false);


    const Toaddform = () => {
        dispatch({ type: "openaddd", payload: false })
        // setOpenadd(true)
    }

    const Addnewcity = () => {

        const newcity = {
            id: Date.now(),
            country: "Paris",
            countryCode: "FR",
            cityname,
            dates,
            visitnotes,
            lat: 1.1,
            lon: 1.1,
        }
        handlarr(newcity)

        dispatch({ type: "openaddd", payload: false })

        // setOpenadd(false)
    }

    const handlarr = (newcity) => {

        dispatch({ type: "cities", payload: [...cities, newcity] })


        // setCities((cities) => [...cities, newcity]);

    }
    const Deletfun = (id) => {

        let res = cities.filter((value) => value.id !== id);


        dispatch({ type: "cities", payload: res })


    }


    return (
        <Data.Provider value={{ cities, Addnewcity, dates, cityname, visitnotes, Toaddform, openadd, Deletfun, dispatch }}>{children}</Data.Provider>
    )
}
const UseData = () => {
    const File = useContext(Data);
    return File;
}

export { DataProvider, UseData };