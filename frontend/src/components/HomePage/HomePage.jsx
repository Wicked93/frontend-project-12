/* eslint-disable max-len */
import { React, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Channels from './Channels';
import Message from './Messages';
import { getMessage } from '../../slices/messageSlice';
import {
  getData, getChannels, getActiveChannel,
} from '../../slices/channelsSlice';
import { useAuth } from '../../contexts/AuthContext';

const HomePage = () => {
  const dispatch = useDispatch();
  const { getAuthToken } = useAuth();

  useEffect(() => {
    dispatch(getData(getAuthToken()));
  }, [dispatch, getAuthToken]);

  const dataChannels = useSelector(getChannels);
  const dataMessages = useSelector(getMessage);
  const dataРЎurrentID = useSelector(getActiveChannel);

  const forrectMessage = dataMessages.filter((item) => item.channelId === dataРЎurrentID);
  const correctChat = dataChannels.filter((item) => item.id === dataРЎurrentID);
  const correctChatName = correctChat[0]?.name;
  // eslint-disable-next-line no-debugger
  return (
    <div className="container h-100 my-4 overflow-hidden rounded shadow">
      <div className="row h-100 bg-white flex-md-row">
        <Channels channels={dataChannels} currectChannelID={dataРЎurrentID} />
        <Message message={forrectMessage} currectChannelID={dataРЎurrentID} correctChatName={correctChatName} />
      </div>
    </div>
  );
};

export default HomePage;