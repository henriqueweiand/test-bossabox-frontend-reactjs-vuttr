import React, {useState, useEffect} from 'react';
import { useSelector, useDispatch } from 'react-redux';

import {MdAdd} from "react-icons/md";

import Loading from '~/components/Loading';
import Title from '~/components/Title';
import News from '~/components/News';
import Subtitle from '~/components/Subtitle';
import SearchIput from '~/components/SearchIput';
import Button from '~/components/Button';
import Checkbox from '~/components/Checkbox';
import ModalCreate from '~/pages/Main/components/Create';
import ModalRemove from '~/pages/Main/components/Remove';

import { Creators as ToolsActions } from '../../store/ducks/tools';

import { Container, Heading, Tools, Tool } from './styles';

export default function Main() {
  const [search, setSearch] = useState('');
  const [tagsOnly, setTagsOnly] = useState(false);
  const [tool, setTool] = useState(false);
  const [modalCreate, setModalCreate] = useState(false);
  const [modalRemove, setModalRemove] = useState(false);
  const tools = useSelector(state => state.tools);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ToolsActions.getAllRequest());
  }, [dispatch]);

  function handleAdd(form) {
    dispatch(ToolsActions.addToolRequest(form));
    setModalCreate(false);
  }

  function handleRemove(tool) {
    dispatch(ToolsActions.removeToolRequest(tool.id));
    setModalRemove(false);
  }

  return (
    <Container>
      { !!modalCreate && (
        <ModalCreate
          onClose={setModalCreate}
          onSave={handleAdd}
          open={modalCreate}
        />
      )}

      { !!modalRemove && !!tool ? (
        <ModalRemove
          data={tool}
          onClose={() => {
            setTool(false);
            setModalRemove(false);
          }}
          onRemove={handleRemove}
          open={modalRemove}
        />
      ) : ``}

      <Heading>
        <Title size="4rem">VUTTR</Title>
        <Subtitle>Very Useful Tools to Remember</Subtitle>
      </Heading>

      <Tools>
        <Tool>
          <SearchIput tagsOnly={tagsOnly} onChange={setSearch} />
          <Checkbox onChange={setTagsOnly} text="search in tags only" />
        </Tool>
        <Button onClick={setModalCreate} icon={<MdAdd />} border text="Add" />
      </Tools>

      <div className="news">
        {
          tools.loading ? (
            <Loading>Carregando</Loading>
          ) : (
            <>
              {
                tools.data.map(item =>
                  <News
                    toogleModal={(tool) => {
                      setTool(tool);
                      setModalRemove(true);
                    }}
                    key={item.id}
                    data={item}
                    search={search}
                  />
                )
              }
            </>
          )
        }
      </div>
    </Container>
  );
}
