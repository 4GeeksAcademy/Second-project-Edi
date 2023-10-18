"""empty message

Revision ID: 50cc2bbff45e
Revises: 8b7fd0e6562a
Create Date: 2023-10-18 07:54:28.676636

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '50cc2bbff45e'
down_revision = '8b7fd0e6562a'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_table('itemimage')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('itemimage',
    sa.Column('id', sa.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('item_id', sa.INTEGER(), autoincrement=False, nullable=True),
    sa.ForeignKeyConstraint(['item_id'], ['item.id'], name='itemimage_item_id_fkey'),
    sa.PrimaryKeyConstraint('id', name='itemimage_pkey')
    )
    # ### end Alembic commands ###
