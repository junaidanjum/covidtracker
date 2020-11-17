import axios from 'axios'

const url = 'https://covid19.mathdro.id/api'

const fetchData = async (country) => {
    let changedURL = url;
    if (country) {
        changedURL = `${url}/countries/${country}`
    }
    try {
        const {data : {confirmed, recovered, deaths, lastUpdate}}= await axios.get(changedURL);
        return {confirmed, recovered, deaths, lastUpdate};
    } catch (error) {
        console.log(error)   
    }
}

const fetchDaily = async () => {
 try {
    const { data } = await axios.get(`${url}/daily`)
    const modifiedData = data.map((dailyData) => ({
        confirmed: dailyData.confirmed.total,
        deaths: dailyData.deaths.total,
        date: dailyData.reportDate
    }))
return modifiedData;
} catch (error) {
     console.log(error)
 }
}

const fetchCountry = async () => {
    try {
        const {data : {countries}} = await axios.get(`${url}/countries`)
        return countries
    } catch (error) {
        console.log(error);
    }
}

export { fetchData, fetchDaily, fetchCountry }