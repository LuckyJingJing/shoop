<template>
    <div>
      <h1>{{goods.title}}</h1>
      <p class="subtitle">{{goods.zhaiyao}}</p>
      <div class="spec-box">
        <dl>
          <dt>货号</dt>
          <dd id="commodityGoodsNo">{{goods.goods_no}}</dd>
        </dl>
        <dl>
          <dt>市场价</dt>
          <dd>
            <s id="commodityMarketPrice">¥{{goods.market_price}}</s>
          </dd>
        </dl>
        <dl>
          <dt>销售价</dt>
          <dd>
            <em class="price" id="commoditySellPrice">¥{{goods.sell_price}}</em>
          </dd>
        </dl>
      </div>

      <div class="spec-box">
        <dl>
          <dt>购买数量</dt>
          <dd>
            <div class="stock-box">
              <!-- 注意这里的min设置最小值也要在：冒号 -->
                <el-input-number size="mini" v-model="num" :min=1 :max="goods.stock_quantity"></el-input-number>
            </div>
            <span class="stock-txt">
              库存
              <em id="commodityStockNum">{{goods.stock_quantity}}</em>件
            </span>
          </dd>
        </dl>
        <dl>
          <dd>
            <div class="btn-buy" id="buyButton">
              <button class="buy" onclick="cartAdd(this,'/',1,'/shopping.html');">立即购买</button>
              <button class="add" onclick="cartAdd(this,'/',0,'/cart.html');">加入购物车</button>
            </div>
          </dd>
        </dl>
      </div>
    </div>
</template>

<script>
  
  export default {
    props:['goods'],
    data(){
      return {
        num:null
      }
    }
  }

</script>

<style scope>

</style>