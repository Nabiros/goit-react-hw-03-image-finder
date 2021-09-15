import { Component } from "react";
import './_modal.scss';

import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {


    componentDidMount() {
        window.addEventListener('keydown', (e) => {
        const { onClose } = this.props;

            if (e.code === 'Escape') {
                onClose();
        }
        })
    };

    componentDidUpdate() {
        console.log('modal is did update')
    };

    // onEscClick = (e) => {
    //     const { onclick } = this.props;
    //     if (e.code === 'Escape') {
    //         onclick();
    //     }
    // };

    render() {
        const { onclick, image, children } = this.props;

        return createPortal(
            <div className="ModalOverlay" onclick={onclick}>
                <div className="Modal">{children}
                    <img src={image} alt="" />
                </div>
            </div>,
            modalRoot,
        );
    }
};