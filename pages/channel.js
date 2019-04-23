import "isomorphic-fetch";
import Layout from "../components/Layout";
import Channel from "../components/Channel";
import Error from "./_error";

export default class extends React.Component {
  constructor(props) {
    super(props);

    this.state = { openPodcast: null };
  }

  static async getInitialProps({ query, res }) {
    let idChannel = query.id;

    try {
      let [reqChannel, reqSeries, reqAudios] = await Promise.all([
        fetch(`https://api.audioboom.com/channels/${idChannel}`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/child_channels`),
        fetch(`https://api.audioboom.com/channels/${idChannel}/audio_clips`)
      ]);

      if (reqChannel.status >= 404) {
        res.statusCode = reqChannel.status;
        return {
          channel: null,
          audioClips: null,
          series: null,
          statusCode: reqChannel.status
        };
      }

      let dataChannel = await reqChannel.json();
      let channel = dataChannel.body.channel;

      let dataAudios = await reqAudios.json();
      let audioClips = dataAudios.body.audio_clips;

      let dataSeries = await reqSeries.json();
      let series = dataSeries.body.channels;

      return { channel, audioClips, series, statusCode: 200 };
    } catch (err) {
      res.statusCode = 503;
      return { channel: null, audioClips: null, series: null, statusCode: 503 };
    }
  }

  handleOpenPodcast = (event, podcast) => {
    event.preventDefault();

    this.setState({
      openPodcast: podcast
    });
  };

  render() {
    const { channel, audioClips, series, statusCode } = this.props;
    const { openPodcast } = this.state;
    if (statusCode !== 200) {
      return <Error statusCode={statusCode} />;
    }

    return (
      <Layout title={channel.title}>
        <Channel
          openPodcast={openPodcast}
          handleOpenPodcast={this.handleOpenPodcast}
          channel={channel}
          audioClips={audioClips}
          series={series}
        />
      </Layout>
    );
  }
}
