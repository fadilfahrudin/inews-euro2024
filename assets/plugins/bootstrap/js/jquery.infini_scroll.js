/*
 +------------------------------------------------------------------------------
 * infini scroll jQuery Plug-in
 +------------------------------------------------------------------------------
 * @author fanrong33 <fanrong33@qq.com>
 * @version v1.0.1 Build 20150227
 +------------------------------------------------------------------------------
 */
/*
  html:
  <ul id="J_mod_article_list">
    <li>1</li>
    <li>2</li>
  </ul>

  use age:
  $("#J_mod_article_list").infini_scroll({
    totalPages: 2,
    url: "ajax_get_article_list.html"
  });
 */
(function($){

    $.fn.infini_scroll = function(options){

        // merge settings
        var opts = $.extend({}, $.fn.infini_scroll.defaults, options);

        return this.each(function(){
            var $this = $(this);

            var p           = 1;        // 当前页数
            var is_loading  = false;    // 触发开关，防止多次调用事件
            var index       = 0;        // 当前第几回合

            // 加载数据函数
            function load_data(){
                if(is_loading==false){
                    
                    opts.debug && window.console && console.info('ajax load');
                    is_loading = true;
                    p++;
                    index++;

                    if(opts.totalPages > 0 && p > opts.totalPages){
                        return;
                    }
                
                    var params = { };
                    params[opts.varPage] = p;
                    $.ajax({
                        type    : "get",
                        url     : opts.url,
                        data    : params,
                        dataType: "html",
                        timeout : 5000,
                        beforeSend: function(){
                            $(opts.loadingElement).show();
                        },
                        success : function(html){
                            $this.append(html);

                            // 当当前页数大于等于总页数时，说明最后一页，没有了
                            if(p >= opts.totalPages){
                                $(opts.loadMoreElement).hide();
                            }
                        },
                        complete: function(){
                            is_loading=false;
                            $(opts.loadingElement).hide();
                        }
                    });
                }
            }
            
            // 绑定加载更多事件
            $(opts.loadMoreElement).click(function(){
                index = 0; // 开始新的一回合
                $(opts.loadMoreElement).hide();
                load_data();
            });
            
            // 绑定window上拉加载事件
            $(window).scroll(function() {
                var scroll_top      = $(this).scrollTop();  // 滚动条相对于其顶部的偏移
                var window_height   = $(window).height();   // 可视高度
                var document_height = $(document).height(); // 文档高度
            
                // 如果一回合可加载4次，超过则显示“加载更多”，防止无限制加载
                opts.debug && window.console && index>0 && console.info('index :'+index);
                if(index >= opts.round){
                    if(opts.totalPages > p){
                        $(opts.loadMoreElement).show();
                    }
                    return;
                }
                
                //当内容滚动到底部时加载新的内容 100当距离最底部100个像素时开始加载.
                if (scroll_top + window_height + opts.triggerBottom >= document_height && scroll_top > 50) {
                    load_data();
                }
            });

        });
    }

    // default settings
    $.fn.infini_scroll.defaults = {
        totalPages      : 0,                // 总页数，默认为0
        url             : '',               // 获取列表url请求地址，直接返回列表的html
        varPage         : 'p',              // 分页变量，默认为p
        triggerBottom   : 100,              // 距离最底部多少像素触发
        round           : 3,                // 当上拉刷新3次后，显示“加载更多”，防止无限制加载
        loadingElement  : '#J_loading',     // 显示“正在加载更多”节点
        loadMoreElement : '#J_load_more',   // 当round达到加载次数后显示的“加载更多”节点，
        debug           : false             // 调试模式开关，默认未开启
    }
})(jQuery);

(function($){
$('ul.nav li.dropdown').hover(function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeIn(500);
}, function() {
  $(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(500);
});
})