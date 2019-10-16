import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

import { Creators as ToolsActions } from '../../store/ducks/tools';

import {MdSearch} from "react-icons/md";

import { Container, Input } from './styles';

export default function SearchInput({tagsOnly, onChange}) {
  const dispatch = useDispatch();

  function handleChange(evt) {
    const {value} = evt.target;

    if (!!onChange) {
      onChange(value);
    }

    if (tagsOnly) {
      dispatch(ToolsActions.getByTagRequest(value));
    } else {
      dispatch(ToolsActions.getAllRequest(value));
    }
  }

  return (
    <Container htmlFor="input-search">
      <MdSearch />
      <Input
        name="seatch"
        id="input-search"
        onChange={handleChange}
        placeholder="search"
      />
    </Container>
  );
}

SearchInput.defaultProps = {
  tagsOnly: false
};

SearchInput.propTypes = {
  tagsOnly: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};
