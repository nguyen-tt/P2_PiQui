function ReplayBtn() {
  const refresh = () => {
    window.location.reload("Refresh");
  };
  return (
    <div className="replayBtn">
      <button type="button" onClick={refresh}>
        Replay
      </button>
    </div>
  );
}

export default ReplayBtn;
