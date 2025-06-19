// fetch metadata and all information of the NFT
const item = await sdk.apis.item.getItemById({
  itemId:
    "ETHEREUM:0xb66a603f4cfe17e3d27b87a8bfcad319856518b8:32292934596187112148346015918544186536963932779440027682601542850818403729410",
});

// then render NFT
function RenderNft({ item }: { item: Item }) {
  return (
    <div>
      <div>{item.meta?.name}</div>
      <div>{item.meta?.description}</div>
      <img src={item.meta?.content[0].url} />
    </div>
  );
}