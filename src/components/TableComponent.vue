<template>
  <div class="table-component">
    <table>
      <tr class="theading">
        <th v-for="(item, key) in headings" :key="key">{{ item }}</th>
      </tr>
      <tr class="tbody" v-for="(data, key) in items" :key="key">
        <td v-for="(item, index) in data" :key="index">{{ item }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  props: {
    headings: Array,
    items: Array,
  },
};
</script>

<style scoped lang="scss">
// sets

$gl-ms: "screen and (max-width: 23.5em)"; // up to 360px
$gl-xs: "screen and (max-width: 35.5em)"; // up to 568px
$gl-sm: "screen and (max-width: 48em)"; // max 768px
$gl-md: "screen and (max-width: 64em)"; // max 1024px
$gl-lg: "screen and (max-width: 80em)"; // max 1280px

// table style
.table-component {
  max-width: 600px;
  margin: auto;
}

table {
  border-spacing: 1;
  border-collapse: collapse;
  background: white;
  border-radius: 6px;
  overflow: hidden;
  max-width: 800px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  * {
    position: relative;
  }

  th {
    padding: 12px 24px;
    color: #fff;
  }
  td {
    padding: 8px 16px;
  }

  .theading {
    background: #304d64;
    font-size: 14px;
  }

  .tbody {
    height: 48px;
    border-bottom: 1px solid #e3f1d5;
    background: #f3f3f3;
    &:last-child {
      border: 0;
    }
  }

  td,
  th {
    text-align: left;
    &.l {
      text-align: right;
    }
    &.c {
      text-align: center;
    }
    &.r {
      text-align: center;
    }
  }
}

@media #{$gl-xs} {
  table {
    display: block;
    > *,
    tr,
    td,
    th {
      display: block;
    }

    .theading {
      display: none;
    }
    .tbody {
      height: auto;
      padding: 8px 0;
      td {
        padding-left: 45%;
        margin-bottom: 12px;
        &:last-child {
          margin-bottom: 0;
        }
        &:before {
          position: absolute;
          font-weight: 700;
          width: 40%;
          left: 10px;
          top: 0;
        }

        &:nth-child(1):before {
          content: "Code";
        }
        &:nth-child(2):before {
          content: "Stock";
        }
        &:nth-child(3):before {
          content: "Cap";
        }
        &:nth-child(4):before {
          content: "Inch";
        }
        &:nth-child(5):before {
          content: "Box Type";
        }
      }
    }
  }
}
</style>
