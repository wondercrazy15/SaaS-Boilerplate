'use client';

import React, { useState } from 'react';

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from '@/components/ui/alert-dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const isValidUrl = (url: string) => {
  try {
    new URL(url);
    return true;
  } catch (err) {
    return false;
  }
};

function URLInput() {
  const [URL, setURL] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [error, setError] = useState<string | undefined>(undefined);
  const onSubmit = () => {
    if (isValidUrl(URL)) {
      if (
        URL.includes('https://vimeo.com/') ||
        URL.includes('https://www.dailymotion.com')
      ) {
        setShowDialog(true);
        setError(undefined);
      } else setError('Entered URL is not valid.');
    } else setError('Invalid URL.');
  };
  const handleURLChange = (event: any) => {
    setURL(event.target.value);
  };

  const handleAlertDialog = () => {
    setShowDialog(!showDialog);
  };

  return (
    <>
      <div className="w-1/3">
        <div className="flex items-center gap-3">
          <Input
            type="url"
            className="bg-white text-black"
            placeholder="Enter url"
            onChange={handleURLChange}
          />
          <Button type="button" onClick={onSubmit}>
            Submit
          </Button>
        </div>
        {error && <span className="text-red-400">{error}</span>}
      </div>

      <AlertDialog open={showDialog} onOpenChange={handleAlertDialog}>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Discover the Best Content</AlertDialogTitle>
            <AlertDialogDescription>Your URL is {URL}</AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogAction>Ok</AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}

export default URLInput;
