"use client";
import { authClient } from "@/lib/auth-client";
import {AlertDialog, Button} from "@heroui/react";
import { redirect } from "next/navigation";
import toast from "react-hot-toast";
import { CiTrash } from "react-icons/ci";



const DeleteDialog = ({ facility }) => {

      const {
    _id,
    name
  } = facility;

  const handleDelete = async () => {
            const {data: tokenData} = await authClient.token();
    const res = await fetch(`http://localhost:5000/facilities/${_id}`,{
        method:"DELETE",
        headers:{
            "content-type": "application/json",
            "authorization": `Bearer ${tokenData?.token}`
        }
        
    })

    const data = await res.json()

    
        if(res.ok){
        toast.success("Facility deleted successfully")
    redirect('/facilities')
        }
        if(!res.ok){
            toast.error("Failed to delete facility")
        }


  }
    return (
        <div>
              <AlertDialog>
      <Button className="text-red-500 " variant="outline"><CiTrash />Delete </Button>
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