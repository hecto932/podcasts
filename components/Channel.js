import ChannelBanner from '../components/ChannelBanner';
import ChannelSeries from '../components/ChannelSeries';
import ChannelAudio from '../components/ChannelAudio';

export default class Channel extends React.Component {
  render() {
    const { channel, audioClips, series } = this.props;
    return (
      <div>
        <ChannelBanner image={channel.urls.banner_image.original} />
        <h1>{channel.title}</h1>
        <ChannelSeries series={series} />
        <ChannelAudio audioClips={audioClips} />
        <style jsx>{`
          h1 {
            font-weight: 600;
            padding: 15px;
          }
        `}</style>
      </div>
    );
  }
}