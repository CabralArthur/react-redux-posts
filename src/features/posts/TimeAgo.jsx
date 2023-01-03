import React from 'react'
import { formatDistance } from 'date-fns';

export const TimeAgo = ({ timestamp }) => {
    let timeAgo;
    if (timestamp) {
        const timePeriod = formatDistance(new Date(timestamp), new Date());

        timeAgo = `${timePeriod} ago`
    }

    return (
        <span title={timestamp}>
            - <i>{timeAgo}</i>
        </span>
    )
}
