import ChannelBanner from "../components/ChannelBanner";
import ChannelSeries from "../components/ChannelSeries";
import PodcastListWithClick from "../components/PodcastListWithClick";
import PodcastPlayer from "../components/PodcastPlayer";

export default class Channel extends React.Component {
  render() {
    const {
      channel,
      audioClips,
      series,
      handleOpenPodcast,
      openPodcast,
      handleClosePodcast
    } = this.props;
    console.log(handleOpenPodcast);
    return (
      <div>
        <ChannelBanner image={channel.urls.banner_image.original} />
        <h1>{channel.title}</h1>
        {openPodcast && (
          <div className="modal">
            <PodcastPlayer clip={openPodcast} onClose={handleClosePodcast} />
          </div>
        )}
        <ChannelSeries series={series} />
        <PodcastListWithClick
          onClickPodcast={handleOpenPodcast}
          onClose={handleClosePodcast}
          audioClips={audioClips}
        />
        <style jsx>{`
          h1 {
            font-weight: 600;
            padding: 15px;
          }
          .modal {
            position: fixed;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            z-index: 99999;
          }
        `}</style>
      </div>
    );
  }
}
