import { List } from '../components/List';
import { Card } from '../components/Card';
import { selectCountriesInfo, selectVisiableCountries } from '../store/contriesSlice/contriesSlice';
import { loadAllCountries } from '../store/contriesSlice/contriesSlice';
import { selectControls } from '../store/controls/controlsSlice';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

export const CountriesList = () => {

  const navigate = useNavigate();
  const { search, region } = useSelector(selectControls);
  const countries = useSelector(state => selectVisiableCountries(state, { search, region }));
  const { status, error, qty } = useSelector(selectCountriesInfo)
  const dispatch = useDispatch()

  useEffect(() => {
    if (!qty) {
      dispatch(loadAllCountries())
    }
  }, [qty, dispatch])

  return (
    <>
      {error && <h2>Can't get data</h2>}
      {!countries.length && <h2 style={{ textAlign: 'center' }}> There is no such a country... </h2>}
      {status === 'received' && (
        <List>
          {countries.map((c) => {
            const countryInfo = {
              img: c.flags.png,
              name: c.name,
              info: [
                {
                  title: 'Population',
                  description: c.population.toLocaleString(),
                },
                {
                  title: 'Region',
                  description: c.region,
                },
                {
                  title: 'Capital',
                  description: c.capital,
                },
              ],
            };

            return (
              <Card
                key={c.name}
                onClick={() => navigate(`/country/${c.name}`)}
                {...countryInfo}
              />
            );
          })}
        </List>


      )}
    </>
  )


}