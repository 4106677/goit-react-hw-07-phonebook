import { Input, Title } from './Filter.styled';
import { useDispatch } from 'react-redux';
// import { setFiltered } from 'Redux/filterSlice';

export const Filter = () => {
  // const dispatch = useDispatch();

  return (
    <div>
      <Title>Find contacts by name</Title>
      <Input
        type="text"
        name="filter"
        // onChange={e => dispatch(setFiltered(e.target.value))}
      />
    </div>
  );
};
