const ImageModal = ({ imagePath, setImageModalVisible }) => {
    return(
        <div className = "image_modal">
            <button className = 'close-button' onClick = {() => setImageModalVisible(false)}>X</button>
            <img className = 'modal_image' src = {imagePath} />
        </div>
    );
};

export default ImageModal;