import React, { useState } from "react";
import { Item, Image, Modal, ModalContent,Button } from "./style/card";

export default function Card({ children, ...restProps }) {
  const [showModal, setShowModal] = useState(false);
  return (
    <div>
      <Item onClick={(e) => setShowModal((ps) => !ps)} {...restProps}>
        {children}
      </Item>
      {showModal ? (
        <Modal>
          <ModalContent>
              {children}
              <Button onClick={(e) => setShowModal(false)}>Close</Button>
         </ModalContent>
        </Modal>
      ) : null}
    </div>
  );
}

Card.Image = function CradImage({ children, ...restProps }) {
  return <Image {...restProps}></Image>;
};
