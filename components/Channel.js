import ChannelBanner from '../components/ChannelBanner';
import ChannelSeries from '../components/ChannelSeries';
import PodcastListWithClick from '../components/PodcastListWithClick';

export default class Channel extends React.Component {
  render() {
    const { channel, audioClips, series, handleOpenPodcast, openPodcast } = this.props;
    console.log(handleOpenPodcast);
    return (
      <div>
        <ChannelBanner image={channel.urls.banner_image.original} />
        <h1>{channel.title}</h1>
        {openPodcast && <div>hay un podcast abierto</div>}
        <ChannelSeries series={series} />
        <PodcastListWithClick onClickPodcast={handleOpenPodcast} audioClips={audioClips} />
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