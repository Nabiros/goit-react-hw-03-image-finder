import { Component } from "react";
import './_modal.scss';
import PropTypes from 'prop-types';
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root');

export class Modal extends Component {
    static propTypes = {
        image: PropTypes.string,
        onclick: PropTypes.func
    }

    componentDidMount() {
        window.addEventListener('keydown', (e) => {
        const { onclick } = this.props;

            if (e.code === 'Escape') {
            onclick();
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
        const { onclick, image } = this.props;

        return createPortal(
            <div className="ModalOverlay" onclick={onclick}>
                <div className="Modal">{this.props.children}
                    <img src={image} alt="" />
                </div>
            </div>,
            modalRoot,
        );
    }
};