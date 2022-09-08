import { ComponentType, MouseEvent, useCallback } from "react";

import './modal.css';

export interface ModalContainerExclusiveProps {
  modalVisible: boolean;
  onBackgroundClick?(): void;
}

export type ModalContentProps<P> = P & ModalContainerExclusiveProps;

export function makeModal<P>(Component: ComponentType<ModalContentProps<P>>) {
  return function ModalContainer(props: ModalContentProps<P>) {
    const { modalVisible, onBackgroundClick } = props;
    const onModalContentClick = useCallback((e: MouseEvent<HTMLDivElement>) => {
      e.stopPropagation();
    }, []);

    if (!modalVisible) return null;

    return (
      <div className="modal-container" onClick={onBackgroundClick}>
        <div className="modal-content" onClick={onModalContentClick}>
          <Component {...props} />
        </div>
      </div>
    )
  }
}
