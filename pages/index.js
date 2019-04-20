export default class extends React.Component {
  render() {
    return (
      <div>
        <h1>Hello world!</h1>
        <p>Bienvenidos al curso de Next.js</p>

        <img src="/static/platzi-logo.png" alt="plazi"/>

        <style jsx>{`
          h1 {
            color: red;
          }
          div :global(p) {
            color: green;
          }
          img {
            max-width: 50%;
            display: block;
            margin: 0 auto;
          }
        `}
        </style>

        <style jsx global>{`
          body {
            background: white;
          }
        `}</style>
      </div>
    );
  }
}
