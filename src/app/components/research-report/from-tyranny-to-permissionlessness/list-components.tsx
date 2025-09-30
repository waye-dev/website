import { ReactNode } from 'react';

interface ListItemProps {
  children: ReactNode;
  className?: string;
}

export const ListItem = ({ children, className = "" }: ListItemProps) => {
  return (
    <li className={`flex items-start ${className}`}>
      <span className="text-black-600 mr-2">•</span>
      <span>{children}</span>
    </li>
  );
};

interface ListProps {
  children: ReactNode;
  className?: string;
  itemClassName?: string;
}

export const List = ({ children, className = "space-y-3 text-left", itemClassName = "" }: ListProps) => {
  return (
    <ul className={className}>
      {children}
    </ul>
  );
};

interface BulletListProps {
  items: ReactNode[];
  className?: string;
  itemClassName?: string;
}

export const BulletList = ({ items, className = "space-y-3 text-left", itemClassName = "" }: BulletListProps) => {
  return (
    <List className={className} itemClassName={itemClassName}>
      {items.map((item, index) => (
        <ListItem key={index} className={itemClassName}>
          {item}
        </ListItem>
      ))}
    </List>
  );
};
