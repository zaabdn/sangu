import React from "react";
import { Modal as RNModal } from "react-native";

const Modal = ({ content, actions, visible, dismissable, onDismiss, footer }) => (
  <RNModal visible={visible} onDismiss={onDismiss}>
    {content}
    {footer}
  </RNModal>
);

export default Modal;
