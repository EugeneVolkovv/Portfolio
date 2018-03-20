var myGigs = [
        {
            title: "Концерт Depeche Mode",
            description: "Описание концерта здесь",
            price: 300,
            type: "concert",
        },
        {
            title: "Выставка Модильяни",
            description: "Описание выставки здесь",
            price: 200,
            type: "exhibition",
        },
        {
            title: "Концерт Кротов и Белок",
            description: "Описание концерта здесь",
            price: 500,
            type: "concert",
            isFavorite:false,
        },
        {
            title: "Выставка Клоунов",
            description: "Описание концерта здесь",
            price: 600,
            type: "exhibition",
            isFavorite:false,
        },
        {
            title: "Концерт  Mode",
            description: "Описание концерта здесь",
            price: 800,
            type: "concert",
            isFavorite:false,
        },
        {
            title: "Выставка ничего",
            description: "Описание концерта здесь",
            price: 900,
            type: "exhibition",
            isFavorite:false,
        },
        {
            title: "Выставка тимона и пумбы",
            description: "Описание концерта здесь",
            price: 100,
            type: "exhibition",
            isFavorite:false,
        },
        {
            title: "Концерт che gevara",
            description: "Описание концерта здесь",
            price: 350,
            type: "concert",
            isFavorite:false,
        },
];


var Article = React.createClass({
    propTypes: {
        data: React.PropTypes.shape({
            title: React.PropTypes.string.isRequired,
            description: React.PropTypes.string.isRequired,
            price: React.PropTypes.number.isRequired,
            type: React.PropTypes.string.isRequired,
            isFavorite:React.PropTypes.bool.isRequired,
            onFavoriteClick: React.PropTypes.func,
        })
    },
    getInitialState: function () {
        return {
            favoritesDisabled: false,
            isFavorite: false,
        };
    },
    addFavorites : function (e) {
    e.preventDefault();
    this.setState({favorites: true});
    },
    toggleFavorite: function (e) {
        e.preventDefault();
        this.props.onFavoriteClick(this.props.data);

    },
    render:
        function () {
            var title = this.props.data.title,
                description = this.props.data.description,
                price = this.props.data.price;


            return (

                <div className="article">
                    <p className="event__title">Событие:{title}</p>
                    <p className="event__description">{description}</p>
                    <p className="event__price">Цена:{price}</p>
                    <button className="favorites"
                            onClick={this.toggleFavorite}
                    >{this.props.isFavorite ? 'Убрать из избранного' : 'Добавить в избранное'}</button>
                </div>
            )
        }
});


var News = React.createClass({
    propTypes: {
        data: React.PropTypes.array.isRequired,

    },
    getInitialState: function () {
        return {
            counter: 0
        }
    },
    onFavoriteClick(gig) {
        gig.isFavorite = !gig.isFavorite;
        this.forceUpdate();
    },
    render: function () {
        var data = this.props.data;
        var gigsTemplate;

        if (data.length > 0) {
            gigsTemplate = data.map((item, index) => {
                return (
                    <div key={index}>
                        <Article data={item} isFavorite={item.isFavorite} onFavoriteClick={this.onFavoriteClick}/>
                    </div>
                )
            })
        } else {
            gigsTemplate = <p>К сожалению событий нет</p>
        }

        return (
            <div className='gigs'>
                {gigsTemplate}
                <strong className={'gigs__count ' + (data.length > 0 ? '' : 'none')}>Всего
                    событий: {data.length}</strong>
            </div>
        );
    }
});

var FilterButton = React.createClass({
    propTypes: {
        isActive: React.PropTypes.bool,
        text: React.PropTypes.text,
        onClick: React.PropTypes.func,
    },
    render: function() {
        var className = 'add';
        if (this.props.isActive) {
            className += ' selected';
        }
        return <button className={className} onClick={this.props.onClick}>{this.props.text}</button>;
    }
});



var Filter = React.createClass({
    propTypes: {
        currentFilter: React.PropTypes.number,
        onFilterSelect: React.PropTypes.func,
    },



    render: function() {
        var self = this;
        console.log(this.props.currentFilter)
        return (

            <div className="buttonsFilter">
                <FilterButton text="Избранное" isActive={this.props.currentFilter == 1} onClick={function() { self.props.onFilterSelect(1)}} />
                <FilterButton text="Концерты" isActive={this.props.currentFilter == 2} onClick={function() { self.props.onFilterSelect(2)}} />
                <FilterButton text="Выставки" isActive={this.props.currentFilter == 3} onClick={function() { self.props.onFilterSelect(3)}} />
                <FilterButton text="Дорогие" isActive={this.props.currentFilter == 4} onClick={function() { self.props.onFilterSelect(4)}} />
                <FilterButton text="Дешевые" isActive={this.props.currentFilter == 5} onClick={function() { self.props.onFilterSelect(5)}} />
            </div>
        );
    }
});

var App = React.createClass({
    getInitialState: function() { //устанавливаем начальное состояние (state)
        return {
            currentFilter: null
        };
    },
    componentDidMount() {
        var self = this;
        setTimeout(function() {
            self.setState({ gigs: myGigs })
        }, 1000);
    },
    getFilteredGigs() {
        if (!this.state.gigs) {
            return null;
        }
        var self = this;
        var filteredGigs = this.state.gigs.filter(function (gig) {
            var currentFilter = self.state.currentFilter;
            if (currentFilter == 4) {
                return gig.price >= 600;
            } else if(currentFilter == 5) {
                return gig.price < 600;
            } else if (currentFilter == 2) {
                return gig.type == "concert";
            }else if (currentFilter == 3) {
                return gig.type == "exhibition";
            }else if (currentFilter == 1 ) {
                return gig.isFavorite;
            }

            return true;
        })
        return filteredGigs;
    },
    setFilter(filter) {
        if (filter === this.state.currentFilter) {
            this.setState({currentFilter: null});
        } else {
            this.setState({currentFilter:filter});
        }

    },

    render: function() {
        var gigs = this.getFilteredGigs();
        if (!gigs) {
            return <div>Loading</div>;
        }
        return (

            <div className="app">
                <Filter currentFilter={this.state.currentFilter} onFilterSelect={this.setFilter} />
                <div><h3>События</h3></div>
                <News data={gigs}   />
            </div>
        );
    }
});


ReactDOM.render(
    <App/>,
    document.getElementById('root')
);
