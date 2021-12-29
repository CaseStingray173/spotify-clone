export const initialState = {
  // The initial state where we dont have a use logged in
  user: null,
  playlists: [],
  playing: false,
  item: null,
  // Set the default token to our login token for testing purposes
  // The actual token value should be null
  token:
    "BQCCaaeOMs14yL1SpH2f6JsjOi9kUNshq-sXKO56MKDvTtBqx3HwQ46PumNvuzDKEv3Nghd_3fNZWo6P9Uo_41wMrsGxFcadygsLi9W6eT_FMAsgu1zpVuOztIStFTiGkXlNwCFQA_Tk47ZVhPzX42UIrYBLnMkh0Bdf-v3M3V0Sp_aRYXdBiD9OZGdzq6fwHXjHQw0CBg",
};

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };

    case "SET_PLAYLISTS":
      return {
        ...state,
        playlists: action.playlists,
      };
    default:
      return state;
  }
};
export default reducer;
