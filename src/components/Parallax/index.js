import React from 'react';
import ReactDOM from 'react-dom';
import styles from './styles.scss';

var WindowScrollMixin = {
    componentDidMount: function() {
        window.addEventListener('scroll', this.onScroll, false);
    },
    componentWillUnmount: function() {
        window.removeEventListener('scroll', this.onScroll, false);
    }
};

var SCROLL_TIMEOUT = 240;
var CHECK_INTERVAL = SCROLL_TIMEOUT / 6;

var PageScrollMixin = {

    mixins: [WindowScrollMixin],

    checkInterval: null,
    scrolling: false,
    proxiedScrollTime: Date.now(),

    componentDidMount: function() {
        this.checkInterval = window.setInterval(this.checkScroll, CHECK_INTERVAL);
        this.scrolling = false;
    },

    componentWillUnmount: function() {
        window.clearInterval(this.checkInterval);
    },

    checkScroll: function() {
        if (Date.now() - this.lastScrollTime > SCROLL_TIMEOUT && this.scrolling) {
            this.scrolling = false;
            this.onScrollEnd();
        }
    },

    proxiedScroll: function() {
        if (Date.now() - this.proxiedScrollTime > CHECK_INTERVAL && this.scrolling) {
            this.proxiedScrollTime = Date.now();
            this.onScrollProxy();
        }
    },

    onScroll: function() {
        if (!this.scrolling) {
            this.scrolling = true;
            this.onScrollStart();
        }

        this.lastScrollTime = Date.now();
        this.proxiedScroll();
    }
};


/**
 * Stickybox React component
 * @class
 */
var Parallax = React.createClass({
    render: function() {
        var children = React.Children.map(
            this.props.children,
            function(child) {
                return React.createElement(Stickybox, { className: 'card' }, child);
            }
        );
        return React.createElement('div', { className: styles.parallax }, children);
    }
});


/**
 * Stickybox React component
 * @class
 */
var Stickybox = React.createClass({

    mixins: [PageScrollMixin],

    node: null,

    getInitialState: function() {
        return {
            top: 1,
            height: -1,
            scrolling: false
        };
    },

    componentDidMount: function() {
        this.node = ReactDOM.findDOMNode(this);
        this.active = false;
        this.className = styles.parallaxcontainer;
        this.updateTopPosition();
    },

    handleScroll: function() {
        this.updateTopPosition();
    },

    updateTopPosition: function() {
        var box = this.node.getBoundingClientRect();
        this.setState({
            top: box.top,
            height: box.height
        });
    },

    onScrollStart: function() {
        this.setState({ scrolling: true });
        this.handleScroll();
    },

    onScrollProxy: function() {
        this.handleScroll();
    },

    shouldComponentUpdate: function() {
        if (this.isFrozen() && (!this.active)) {
            this.active = true;
            return false;
        } else {
            return true;
        }

    },

    onScrollEnd: function() {
        this.setState({ scrolling: false });
        this.handleScroll();
    },

    getState: function() {
        return this.state;
    },

    isFrozen: function() {
        if (this.node) {
            var rect = this.node.parentElement.parentElement.getBoundingClientRect()
            return (rect.top < 1 && (rect.top + rect.height > 1));
        }
    },

    setClassName: function() {
        if (this.node) {

        if (this.isFrozen()) {
            if (!this.node.className) {
                this.node.className = styles.frozen;
            }

        } else {
            this.node.className = '';
        }
      }
    },

    /**
     * Render
     * @returns {ReactElement} react element
     */
    render: function() {
        var args = {},
            isFrozen = this.isFrozen();
        this.setClassName();
        args.style = {
            height: isFrozen ? this.state.height : 'auto',
        };
        return React.createElement('div', args,
            this.props.children);
    }
});



export default Parallax;
