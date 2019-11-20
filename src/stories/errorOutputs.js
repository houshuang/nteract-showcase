export default [
  {
    ename: 'NameError',
    evalue: "name 'np' is not defined",
    output_type: 'error',
    traceback: [
      '\u001b[0;31m---------------------------------------------------------------------------\u001b[0m',
      '\u001b[0;31mNameError\u001b[0m                                 Traceback (most recent call last)',
      "\u001b[0;32m<ipython-input-6-73639a431add>\u001b[0m in \u001b[0;36m<module>\u001b[0;34m\u001b[0m\n\u001b[1;32m      2\u001b[0m \u001b[0mdates\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mpd\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mdate_range\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m'20130101'\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mperiods\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0;36m6\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[1;32m      3\u001b[0m \u001b[0mdates\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0;32m----> 4\u001b[0;31m \u001b[0mdf\u001b[0m \u001b[0;34m=\u001b[0m \u001b[0mpd\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mDataFrame\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0mnp\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mrandom\u001b[0m\u001b[0;34m.\u001b[0m\u001b[0mrandn\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;36m6\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0;36m4\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mindex\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mdates\u001b[0m\u001b[0;34m,\u001b[0m \u001b[0mcolumns\u001b[0m\u001b[0;34m=\u001b[0m\u001b[0mlist\u001b[0m\u001b[0;34m(\u001b[0m\u001b[0;34m'ABCD'\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m)\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n\u001b[0m\u001b[1;32m      5\u001b[0m \u001b[0mdf\u001b[0m\u001b[0;34m\u001b[0m\u001b[0;34m\u001b[0m\u001b[0m\n",
      "\u001b[0;31mNameError\u001b[0m: name 'np' is not defined",
    ],
  },
];
