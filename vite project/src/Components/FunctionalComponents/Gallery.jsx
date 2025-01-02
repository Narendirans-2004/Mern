import { useState } from 'react';
import '../../assets/css/Gallery.css';

// Counter Component
const Counter = () => {
  const [counter, setCount] = useState(0);

  const increment = () => setCount(counter + 1);
  const decrement = () => setCount(counter - 1);
  const reset = () => setCount(0);

  return (
    <div className="counter-container">
      <h1>This is the Counter Section</h1>
      <h2>Learning State</h2>
      <h3>The current count is: {counter}</h3>
      <button onClick={increment}>Increment</button>
      <button onClick={decrement}>Decrement</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

// Gallery Component
const Gallery = () => {
  const [images, setImages] = useState([]);
  const [newImage, setNewImage] = useState(null);
  const [error, setError] = useState("");

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError("No file selected.");
      return;
    }
    if (!file.type.startsWith("image/")) {
      setError("Please upload a valid image file.");
      return;
    }
    if (file.size > 5 * 1024 * 1024) {
      setError("File size exceeds the 5MB limit.");
      return;
    }
    setError("");
    const reader = new FileReader();
    reader.onloadend = () => {
      setNewImage(reader.result);
    };
    reader.readAsDataURL(file);
  };

  const addImageToGallery = () => {
    if (newImage) {
      setImages([...images, newImage]);
      setNewImage(null);
      document.getElementById("image-upload").value = ""; // Reset input field
    }
  };

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Image Gallery</h2>

      <div className="upload-section">
        <label htmlFor="image-upload" className="upload-label">
          Upload an image:
        </label>
        <input
          id="image-upload"
          type="file"
          accept="image/*"
          onChange={handleImageUpload}
        />
        {error && <p className="error-message">{error}</p>}
        {newImage && (
          <div className="preview-section">
            <img src={newImage} alt="Preview" className="preview-image" />
            <button onClick={addImageToGallery}>Add to Gallery</button>
          </div>
        )}
      </div>

      <div className="gallery-grid">
        {images.length === 0 ? (
          <p className="empty-gallery">No images in the gallery. Upload some!</p>
        ) : (
          images.map((image, index) => (
            <div key={index} className="gallery-item">
              <img
                src={image}
                alt={`Gallery Item ${index + 1}`}
                className="gallery-image"
              />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// App Component
const App = () => {
  return (
    <div>
      <Counter />
      <Gallery />
    </div>
  );
};

export default App;
