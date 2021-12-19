import React, { Component, Fragment, useState, useEffect } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import Form from "react-bootstrap/Form";
import Accordion from "react-bootstrap/Accordion";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";

function FormularioAvance() {
  let idAvance = localStorage.getItem("idAvance");
  let nombre = localStorage.getItem("nombre");

  const MUTATION_PROYECTO = gql`
  mutation  updateDescripcionAvance( $nombre: String ,$id_avance : String, $descripcion:String  ){
    updateDescripcionAvance( nombre: $nombre ,  id_avance: $id_avance, descripcion: $descripcion)
}
  
`;
 
  const [creadorDeProyecto] = useMutation(MUTATION_PROYECTO);
  let descripcion = ''
console.log(nombre)
  return (
    <Fragment>
      <h2 className="te" style={{ textAlign:'center',marginTop:'3%' }}>Registrar Avances  </h2>
      <div className="row"style={{ padding:'5%',paddingTop:'1%', paddingBottom:'1%' }}>
      <hr className="lin"></hr>
      <table className="table row1">
        {" "}
        <thead className="table-dark">
          {" "}
          <tr>
            <th scope="col">Avances</th>
          </tr>
        </thead>
        <tbody> 
            <td >
            <Form
            onSubmit={(e) => {
              e.preventDefault();
              creadorDeProyecto({
                variables: {
                  nombre: nombre,
                  id_avance: idAvance,
                  descripcion: descripcion.value,
                   
                   
                },
              });
              alert('Avance actualizado ')
              // console.log(inscripciones1);
              window.location.href = "/lista-avances";
            }}>
        <Form.Group className="mb-3" controlId="formGroupEmail">
          <Form.Label>Descripción</Form.Label>
          <Form.Control   ref={descripcion1 => descripcion = descripcion1} type="text" placeholder="Describa el anvance" />
        </Form.Group>
        <Button type='submit' variant="dark" style={{ marginLeft:'44%' }} >Guardar Cambios </Button>
      </Form>
      </td>
      
      </tbody>
      </table>
      </div>
      
    </Fragment>
    
  );
}

export default FormularioAvance;
