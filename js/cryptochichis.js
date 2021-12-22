'use strict';

const e = React.createElement;

class Cryptochichis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, nfts: [] };

    fetch('https://mocki.io/v1/0a3f4fb6-b0e5-47d4-8ceb-c3df759fc029').then(
        res => { return res.json(); }
        ).then(
            res => {
                this.setState({ loaded: true, nfts: res})
            });

  }

  render() {
    if (!this.state.loaded) {
      return '<i class="fa fa-spinner fa-spin" aria-hidden="true"></i>';
    }

    const listItems = this.state.nfts.map((nft) =>  <a key={nft.name} href={nft.external_store_link} className="item">
                <div style={{backgroundImage: "url(" + nft.ipfs_link + ")"}} className="bg"></div>
                <div className="caption"><h4 className="title">{nft.name}</h4>
                </div>
              </a>);

    return listItems;
  }

}

const domContainer = document.querySelector('#cryptochichis');
ReactDOM.render(e(Cryptochichis), domContainer);
