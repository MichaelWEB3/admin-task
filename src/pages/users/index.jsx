import React, { useEffect, useState } from "react";
import Menu from "../../components/menu";

import axios from "axios";
import { Table, Modal, Button, Input, Text } from "@nextui-org/react";

export default function Projectsinfo() {
  const [users, setUsers] = useState([]);
  const [visible, setVisible] = useState(false);
  const [email, setemail] = useState("");
  const [senha, setsenha] = useState("");
  const [uid, setuid] = useState(false);
  const handler = () => setVisible(true);
  const closeHandler = () => {
    setVisible(false);
    console.log("closed");
  };
  const getAllUsers = async () => {
    await axios
      .get("/api/getUsersapi")
      .then((resp) => {
        console.log(resp.data.list);
        setUsers(resp.data.list);
      })
      .catch((e) => {
        alert("erro de requisição");
      });
  };

  const edit = async () => {
    await axios
      .put("/api/getUsersapi/edit", {
        email: email,
        senha: senha,
        uid: uid,
      })
      .then((resp) => {
        alert("success");

        getAllUsers();
      })
      .catch((e) => {
        alert("erro de requisição");
      });
  };
  const deletee = async () => {
    await axios
      .put("/api/getUsersapi/delete", {
        uid: uid,
      })
      .then((resp) => {
        alert("success");
        getAllUsers();
      })
      .catch((e) => {
        alert("erro de requisição");
      });
  };
  useEffect(() => {
    getAllUsers();
  }, []);
  return (
    <section className="w-full bg-gray-200 flex flex-col">
      <Menu propSelect={"users"} />
      <Modal
        closeButton
        blur
        aria-labelledby="modal-title"
        open={visible}
        onClose={closeHandler}
      >
        <Modal.Header>
          <Text id="modal-title" size={18}>
            <Text b size={18}>
              Update Info
            </Text>
          </Text>
        </Modal.Header>
        <Modal.Body>
          <Input
            onChange={(e) => setemail(e.target.value)}
            clearable
            value={email}
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="Email"
          />
          <Input
            onChange={(e) => setsenha(e.target.value)}
            clearable
            value={senha}
            bordered
            fullWidth
            color="primary"
            size="lg"
            placeholder="New Password"
          />
        </Modal.Body>
        <Modal.Footer>
          <Button
            auto
            flat
            color="error"
            onClick={() => {
              deletee();
              closeHandler();
            }}
          >
            Delete
          </Button>
          <Button
            onClick={() => {
              edit();
              closeHandler();
            }}
            auto
          >
            Update
          </Button>
        </Modal.Footer>
      </Modal>
      <div className="w-full flex-col h-screen scrollDiv p-5 bg-gray-200 text-gray-800 ">
        <h1 className="font-bold">Producer</h1>
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>OFFICE</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            {users &&
              users?.map((r, i) => {
                if (r.office == "Producer")
                  return (
                    <Table.Row key={i}>
                      <Table.Cell>{r.name}</Table.Cell>
                      <Table.Cell>{r.office}</Table.Cell>
                      <Table.Cell>{r.email}</Table.Cell>
                      <Table.Cell>
                        <div
                          onClick={() => {
                            setemail(r.email);
                            setuid(r.id);
                            handler();
                          }}
                          className="w-full  hover:bg-gray-300  cursor-pointer p-1 h-full"
                        >
                          Edit
                        </div>{" "}
                      </Table.Cell>
                    </Table.Row>
                  );
              })}
          </Table.Body>
        </Table>
        <h1 className="font-bold">Director</h1>
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>OFFICE</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            {users &&
              users?.map((r, i) => {
                if (r.office == "Director")
                  return (
                    <Table.Row key={i}>
                      <Table.Cell>{r.name}</Table.Cell>
                      <Table.Cell>{r.office}</Table.Cell>
                      <Table.Cell>{r.email}</Table.Cell>
                      <Table.Cell>
                        <div
                          onClick={() => {
                            setemail(r.email);
                            setuid(r.id);
                            handler();
                          }}
                          className="w-full  hover:bg-gray-300  cursor-pointer p-1 h-full"
                        >
                          Edit
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
              })}
          </Table.Body>
        </Table>
        <h1 className="font-bold">Designer</h1>
        <Table
          aria-label="Example table with static content"
          css={{
            height: "auto",
            minWidth: "100%",
          }}
        >
          <Table.Header>
            <Table.Column>NAME</Table.Column>
            <Table.Column>OFFICE</Table.Column>
            <Table.Column>EMAIL</Table.Column>
            <Table.Column></Table.Column>
          </Table.Header>
          <Table.Body>
            {users &&
              users?.map((r, i) => {
                if (r.office == "Designer")
                  return (
                    <Table.Row key={i}>
                      <Table.Cell>{r.name}</Table.Cell>
                      <Table.Cell>{r.office}</Table.Cell>
                      <Table.Cell>{r.email}</Table.Cell>
                      <Table.Cell>
                        <div
                          onClick={() => {
                            setemail(r.email);
                            setuid(r.id);
                            handler();
                          }}
                          className="w-full  hover:bg-gray-300  cursor-pointer p-1 h-full"
                        >
                          Edit
                        </div>
                      </Table.Cell>
                    </Table.Row>
                  );
              })}
          </Table.Body>
        </Table>
      </div>
    </section>
  );
}
