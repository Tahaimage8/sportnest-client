"use client"
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import React from "react";
import toast from "react-hot-toast";
import { CiTrash } from "react-icons/ci";

const BookingCancelAlert = ({ booking }) => {

  const {
    name,
    _id
  } = booking;
//   console.log(_id)
    // const {data: tokenData} = await authClient.token();
  const handleDelete= async()=>{
        const {data: tokenData} = await authClient.token();

    const res = await fetch(`http://localhost:5000/booking/${_id}`,{
        method: "DELETE",
        headers:{
            "content-type" : "application/json",
              authorization : `Bearer ${tokenData?.token}`
        }
    })

    const data = await res.json();
    // console.log(data)

    if(res.ok){
        toast.success("Booking cancelled successfully")
    window.location.reload();
    }
    if(!res.ok){
        toast.error("Failed to cancel booking")
    }
  }
  return (
    <div>
      <AlertDialog>
        <Button className="text-red-500 bg-zinc-300 hover:bg-zinc-50 border-none" variant="outline">
          <CiTrash /> Cancel
        </Button>
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
                  This will permanently delete <strong>{name}</strong> and all
                  of its data. This action cannot be undone.
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

export default BookingCancelAlert;
