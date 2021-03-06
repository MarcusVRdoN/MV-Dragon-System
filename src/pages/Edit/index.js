import React from 'react'
import { useParams } from 'react-router-dom'

import Page from '../../components/Page'
import DragonsDetail from '../../components/DragonsDetail'

function Edit() {
  const { id } = useParams()

  return (
    <Page>
      <h1 className="title title--large">Editar dragão</h1>
      <DragonsDetail id={id} />
    </Page>
  )
}

export default Edit
