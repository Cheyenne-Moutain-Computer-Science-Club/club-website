import React from 'react';
import Card from './card';
import Link from 'next/link';

export default function Alex() {
    return (
      <div>
        <Link href="/..">Back</Link>
        <br />
        <br />
        <h1>The Void welcomes You.</h1>
        <Card />
      </div>
  
    )
  }
