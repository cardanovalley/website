'use strict';

const e = React.createElement;

class Cryptochichis extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loaded: false, nfts: [] };

    fetch('https://presale.cardanovalley.com/external-urls').then(
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

    const listItems = this.state.nfts.map((nft) =>  <div key={nft.name} className="col-md-4">
                <a href={nft.external_store_link} className="art-item">
                <img src={'assets/cryptochichis/' + nft.name + '.jpg'} ></img>
                <div className="caption"><h4 className="title">{nft.name}</h4>
                    <button className="btn btn-danger">BUY</button>
                    <button className="btn btn-default fa-pull-right">24 ADA</button>
                </div>
                </a>
              </div>);

    return listItems;
  }

}

const domContainer = document.querySelector('#cryptochichis');
ReactDOM.render(e(Cryptochichis), domContainer);
