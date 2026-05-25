"use client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import { CiTrash } from "react-icons/ci";



const DeleteDialog = ({ facility }) => {

      const {
    _id,
    name
  } = facility;

  const handleDelete = async () => {
    const res = await fetch(`http://localhost:5000/facilities/${_id}`,{
        method:"DELETE",
        headers:{
            "content-type": "application/json"
        }
        
    })

    const data = await res.json()
    redirect('/facilities')
    console.log(data)
  }
    return (
        <div>
              <AlertDialog>
      <Button className="text-red-500 " variant="outline"><CiTrash />Delete Project</Button>
      <AlertDialog.Backdrop>
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-100">
            <AlertDialog.CloseTrigger />
            <AlertDialog.Header>
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading>Delete permanently?</AlertDialog.Heading>
            </AlertDialog.Header>
            <AlertDialog.Body>
              <p>
                This will permanently delete <strong>{name}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            <AlertDialog.Footer>
              <Button slot="close" variant="tertiary">
                Cancel
              </Button>
              <Button slot="close" onClick={handleDelete} variant="danger">
                Delete
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </AlertDialog>
        </div>
    );
};

export default DeleteDialog;