var React = require('react');

var PokemonSearch = require('../components/PokemonSearch.jsx');
var Pokemon = require('../components/Pokemon.jsx');

var Router = require('react-router');
var Navigation = Router.Navigation;
var Link = Router.Link;

var Reflux = require('reflux');
var PokemonStore = require('../stores/PokemonStores.jsx')

var $ = require('jquery')

module.exports = React.createClass({

  displayName: 'pokemon',
  mixins : [
    Navigation
  ],
  componentDidMount : function(){
    PokemonStore.listen(this.onUpdate)
  },
  onUpdate: function(pokemon) {
    console.log('tenemos nuevo pokemon: ', pokemon.name)
    this.setState({pokemon: pokemon});
  },
  getInitialState : function(){
    return {
      pokemon : this.props.pokemon
    }
  },
  render: function() {
    return (
      <div >
          <h2>Pokemon encontrado!</h2> <a onClick={this.goHome}>ir a la home</a>
          <Pokemon pokemon={this.state.pokemon}/>
          <hr/>
          <h2>Busca otro pokemon</h2>
          <PokemonSearch/>
      </div>
    );
  },

  goHome : function(){
    this.transitionTo('/')
  }
  
});

