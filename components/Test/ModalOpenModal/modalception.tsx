"use client";

import delorean from "@/assets/delorean.jpg";
import { Button } from "@/components/ui/Button/Button";
import Modal from "@/components/ui/Modal/modal";
import Image from "next/image";
import { useState } from "react";

export default function Modalception() {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Button type="button" onClick={() => setShowModal(true)}>
        Open Second modal
      </Button>
      {showModal ? (
        <Modal setShowModal={setShowModal}>
          <span>Time Machine!</span>
          <Image src={delorean} alt="img" />
        </Modal>
      ) : null}
    </div>
  );
}
