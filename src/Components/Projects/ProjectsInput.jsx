import { useState } from 'react';

const TicTacToeForm = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [technologies, setTechnologies] = useState('');
  const [imageSrc, setImageSrc] = useState('');
  const [imageAlt, setImageAlt] = useState('');
  const [formattedOutput, setFormattedOutput] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedData = {
      id: parseInt(id),
      name: name,
      Technology: technologies.split(',').map((tech) => tech.trim()),
      image: {
        src: imageSrc,
        alt: imageAlt
      }
    };
    setFormattedOutput(formattedData);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="id">ID: </label>
          <input
            type="number"
            id="id"
            value={id}
            onChange={(e) => setId(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="technologies">Technologies (comma-separated): </label>
          <input
            type="text"
            id="technologies"
            value={technologies}
            onChange={(e) => setTechnologies(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageSrc">Image Source: </label>
          <input
            type="text"
            id="imageSrc"
            value={imageSrc}
            onChange={(e) => setImageSrc(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="imageAlt">Image Alt Text: </label>
          <input
            type="text"
            id="imageAlt"
            value={imageAlt}
            onChange={(e) => setImageAlt(e.target.value)}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>

      {formattedOutput && (
        <div>
          <h3>Formatted Output:</h3>
          <pre>{JSON.stringify(formattedOutput, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default TicTacToeForm;
