'use client'

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import IntroForm from "@/app/components/IntroForm";
import {useEffect, useState} from "react";

export default function DialogIntroForm() {

  const [isOpen, setOpen] = useState(true)

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <Dialog open={isOpen}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Enter user information</DialogTitle>
        </DialogHeader>
        <IntroForm setOpen={setOpen}/>
      </DialogContent>
    </Dialog>
  )
}
