export default class ChannelBanner extends React.Component {
  render() {
    const { image } = this.props;
    return (
      <div
        className="banner"
        style={{
          backgroundImage: `url(${image})`
        }}>
        <style jsx>{`
          .banner {
            width: 100%;
            padding-bottom: 25%;
            background-position: 50% 50%;
            background-size: cover;
            background-color: #aaa;
          }
        `}</style>
      </div>
    );
  }
}
