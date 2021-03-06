/* ============================== *\
   => DROPDOWN
\* ============================== */
(function($, window, document, undefined) {
	var pluginName = 'dropdown';
	var defaults;

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function(options) {
			callbackButton();
			callbackLink();
		}
	}
	
	function callbackButton() {
		$('.dropdown__button').bind('click', function(e) {
			e.preventDefault();
			var trigger = $(this);
			var container = $(trigger).parents('.dropdown');
			var menu = $(container).find('.dropdown__menu');
			
			$(menu).stop().fadeToggle(200, function() {
				$(container).toggleClass('open');
			});
		});
	};
	
	function callbackLink() {
		$('.dropdown__menu a').bind('click', function(e) {
			e.preventDefault();
			var trigger = $(this).parent('li');
			var container = $(trigger).parents('.dropdown');
			var menu = $(container).find('.dropdown__menu');
			
			if(!$(trigger).hasClass('active') && !$(trigger).hasClass('disabled')) {
				$(menu).stop().fadeOut(200, function() {
					$(container).removeClass('open');
				});
			}
		});
	};

	$.fn[pluginName] = function(options, extras) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
			else if ($.isFunction(Plugin.prototype[options])) {
				$.data(this, 'plugin_' + pluginName)[options](extras);
			}
		});
	}
})(jQuery, window, document);

$(document).ready(function() {
	$(document).dropdown();
});


/* ============================== *\
   => MODAL
\* ============================== */
(function($, window, document, undefined) {
	var pluginName = 'modal';
	var defaults;

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function(options) {
			callbackClose();
		}
	}
	
	function callbackClose() {
		$('.modal__close').bind('click', function(e) {
			e.preventDefault();
			var trigger = $(this);
			var container = $(trigger).parents('.modal');
			
			$(container).fadeOut(500, function() {
				$(container).removeClass('open');
			});
		});
	};

	$.fn[pluginName] = function(options, extras) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
			else if ($.isFunction(Plugin.prototype[options])) {
				$.data(this, 'plugin_' + pluginName)[options](extras);
			}
		});
	}
})(jQuery, window, document);

$(document).ready(function() {
	$(document).modal();
});


/* ============================== *\
   => NAVIGATION BAR
\* ============================== */
(function($, window, document, undefined) {
	var pluginName = 'navbar';
	var defaults;

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function(options) {
			callbackToggle();
		}
	}
	
	function callbackToggle() {
		$('.navigation-bar__toggle').bind('click', function(e) {
			e.preventDefault();
			var trigger = $(this);
			var container = $(trigger).parents('.navigation-bar').find('.navigation-bar__body');
			
			$(container).stop().slideToggle(500, function() {
				$(trigger).toggleClass('active');
				$(container).toggleClass('open');
			});
		});
	};

	$.fn[pluginName] = function(options, extras) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
			else if ($.isFunction(Plugin.prototype[options])) {
				$.data(this, 'plugin_' + pluginName)[options](extras);
			}
		});
	}
})(jQuery, window, document);

$(document).ready(function() {
	$(document).navbar();
});


/* ============================== *\
   => NOTIFICATION
\* ============================== */
(function($, window, document, undefined) {
	var pluginName = 'notification';
	var defaults;

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function(options) {
			callbackClose();
		}
	}
	
	function callbackClose() {
		$('.notification__close').bind('click', function(e) {
			e.preventDefault();
			var trigger = $(this);
			var container = $(trigger).parents('.notification');
			
			$(container).fadeOut(500);
		}); 
	};

	$.fn[pluginName] = function(options, extras) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
			else if ($.isFunction(Plugin.prototype[options])) {
				$.data(this, 'plugin_' + pluginName)[options](extras);
			}
		});
	}
})(jQuery, window, document);

$(document).ready(function() {
	$(document).notification();
});


/* ============================== *\
   => TABS
\* ============================== */
(function($, window, document, undefined) {
	var pluginName = 'tabs';
	var defaults;

	function Plugin(element, options) {
		this.element = element;
		this.options = $.extend({}, defaults, options);
		this._name = pluginName;
		this.init();
	}

	Plugin.prototype = {
		init: function(options) {
			callbackTab();
		}
	}
	
	function callbackTab() {
		$('.tabs__nav li').not('.dropdown').find('a').bind('click', function(e) {
			e.preventDefault();
			var trigger = $(this).parent('li');
			var container = $(trigger).parents('.tabs');
			var _trigger = $(container).find('.tabs__nav li.active');
			var content = $(container).find('.tabs__content');
			var target = $(content).find($(this).attr('href'));
			var _target = $(content).find('.tabs__pane.open');
			
			if(!$(trigger).hasClass('active') && !$(trigger).hasClass('disabled')) {
				$(_target).stop().fadeOut(500, function() {
					$(_target).removeClass('open');
					$(target).fadeIn(500, function() {
						$(_trigger).removeClass('active');
						$(trigger).addClass('active');
						if($(trigger).parents('.dropdown__menu').length == 1) {
							$(trigger).parents('.dropdown').addClass('active');
						}
						$(target).addClass('open');
					});
				});
			}
		});
	};

	$.fn[pluginName] = function(options, extras) {
		return this.each(function() {
			if (!$.data(this, 'plugin_' + pluginName)) {
				$.data(this, 'plugin_' + pluginName, new Plugin(this, options));
			}
			else if ($.isFunction(Plugin.prototype[options])) {
				$.data(this, 'plugin_' + pluginName)[options](extras);
			}
		});
	}
})(jQuery, window, document);

$(document).ready(function() {
	$(document).tabs();
});