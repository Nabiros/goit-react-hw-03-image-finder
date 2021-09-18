import { Component } from "react";
import './_modal.scss';

import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {

    
    componentDidMount() {
        window.addEventListener('keydown', this.handleKeyDown)
    };
    
    componentDidUpdate() {
        console.log('modal is did update')
    };
    
    componentWillUnmount() {
        window.removeEventListener('keydown', this.handleKeyDown)
    }
    
    handleKeyDown = e => {
        if (e.code === 'Escape') {
            this.props.onClose();
        }
    };
    
    handleBackdropClick = e => {
        if (e.target === e.currentTarget) {
            this.props.onClose();
        }
    };

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